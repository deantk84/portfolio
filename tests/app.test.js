const request = require('supertest')
const app = require('../app')
 

test("app correctly errors on incorrect path", async () => {
    const response = await request(app).get('/incorrectpath')
    expect(response).toMatchSnapshot()
}) 

test("app correctly serves a home page", async () => {
    const response = await request(app).get('/')
    expect(response).toMatchSnapshot()
}) 