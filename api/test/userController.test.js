import supertest, { agent } from "supertest";
import database from "./database.js";
import api from "../api.js";

describe("Register user", () => {
    test("Create User", async () => {
        await database.connect();
        const response = await agent.post("/register").send({
            email: "test@email.com",
            password: "123",
            name: "test name",
        });
        expect(response.status).toEqual(200);
        await database.close();
    })
});