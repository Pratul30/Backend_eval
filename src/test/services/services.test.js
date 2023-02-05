const services = require('../../services/companyServices');
const { Company } = require('../../../database/models');

describe('services', () => {
    it('should write in the database', async () => {
        const data = [{
            id: 'ad36a7f5-7630-496e-8628-e70981179668',
            name: 'Company ABC',
            score: 67.45
        }, {
            id: 'f6827fd2-656b-4264-b0cf-f449ab7a131d',
            name: 'Company DEF',
            score: 52.45
        }]
        const spied = jest.spyOn(Company, 'create').mockResolvedValue(data);

        const dataDb = await services.saveData('https://store-0001.s3.amazonaws.com/input.csv');

        expect(spied).toBeCalledWith(data)
        
        expect(dataDb).toEqual(data);
    },40000);
});

