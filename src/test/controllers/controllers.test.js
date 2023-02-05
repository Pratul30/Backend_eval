const services = require('../../services/companyServices');
const controllers = require('../../controllers/companyControllers');

describe('creating database', () => {
  it('should fetch the data and create the database', async () => {
    const data = [{
      id: 'ad36a7f5-7630-496e-8628-e70981179668',
      name: 'Company ABC',
      score: 67.45
    }, {
      id: 'f6827fd2-656b-4264-b0cf-f449ab7a131d',
      name: 'Company DEF',
      score: 52.45
    }]
    jest.spyOn(services, 'saveData').mockResolvedValue(data)

    const mockReq = {
      body: {
        urlLink: 'http://abc.com'
      }
    }
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    await controllers.saveData(mockReq, mockRes)

    expect(mockRes.status).toBeCalledWith(201)
    expect(mockRes.json).toBeCalledWith(data)
  })
  it('should throw an error there is no data', async () => {
    jest.spyOn(services, 'saveData').mockResolvedValue(null)

    const mockReq = {
      body: {
        urlLink: 'http://abc.com'
      }
    }
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    await controllers.saveData(mockReq, mockRes)

    expect(mockRes.status).toBeCalledWith(400)
    expect(mockRes.json).toBeCalledWith({ message: 'Error in saving data' })
  })
  it('should throw a server error', async () => {
    jest.spyOn(services, 'saveData').mockRejectedValue(null)

    const mockReq = {
      body: {
        urlLink: 'http://abc.com'
      }
    }
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    await controllers.saveData(mockReq, mockRes)

    expect(mockRes.status).toBeCalledWith(500)
    expect(mockRes.json).toBeCalledWith({ message: 'Internal Server Error' })
  })
})