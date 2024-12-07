import { healthCheck } from "../../src/helpers/healthCheck";
import {jest} from '@jest/globals'


describe('healthCheck', ()=>{
    it('should return status code 200 with "OK" message', async () => {
        // Mocking req, and res object
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }

        healthCheck(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith('OK');
    });
})