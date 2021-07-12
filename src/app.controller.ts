import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Request } from 'express';
import * as yelp from "yelp-fusion";

@Controller('yelp')
export class YelpProxyController {
    @Get()
    async getBusinesses(@Req() req: Request): Promise<any> {
        const headers = req.headers;
        const queryParams = req.query;
        if (!headers["authorization"]) throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        const authToken = headers["authorization"].split(" ")[1];
        const client = yelp.client(authToken);
        try {

            const yelpResponse = await client.search(queryParams);
            return yelpResponse.jsonBody
        } catch (error) {
            if (error.response && error.response.body) return error.response.body;
            console.log(error);
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }
}