const request = require("supertest");
const app = require("../app");
const {
	invitationAddTestData,
	invitationEditTestData,
} = require("./invitation.data");


describe("Invitations API", () => {
	let id;
	beforeAll(async () => {
		await request(app).post("/api/invitations").send(invitationAddTestData);
		await request(app).post("/api/invitations").send(invitationAddTestData);

		const response = await request(app).get("/api/invitations");
		id = response.body[0]._id;
	}, 10000);
	afterAll(async () => {
		await request(app).delete("/api/invitations");
	});
	it("GET /api/invitations --> array of invitations", () => {
		return request(app)
			.get("/api/invitations")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							message: expect.any(String),
							messageImage: expect.any(String),
							responseEffect: expect.any(Boolean),
							response: expect.any(String),
							successImage: expect.any(String),
							successMessage: expect.any(String),
							failedImage: expect.any(String),
							failedMessage: expect.any(String),
							recepient: expect.any(String),
							isPublic: expect.any(Boolean),
							backgroundColor: expect.any(String),
							fontColor: expect.any(String),
							buttonBackgroundColor: expect.any(String),
							buttonFontColor: expect.any(String),
							__v: expect.any(Number),
							_id: expect.any(String),
							updatedAt: expect.any(String),
							createdAt: expect.any(String),
						}),
					])
				);
			});
	});

	it("GET /api/invitations/id --> specific invitation by id", async () => {
		return request(app)
			.get(`/api/invitations/${id}`)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.objectContaining({
						message: expect.any(String),
						messageImage: expect.any(String),
						responseEffect: expect.any(Boolean),
						response: expect.any(String),
						successImage: expect.any(String),
						successMessage: expect.any(String),
						failedImage: expect.any(String),
						failedMessage: expect.any(String),
						recepient: expect.any(String),
						isPublic: expect.any(Boolean),
						backgroundColor: expect.any(String),
						fontColor: expect.any(String),
						buttonBackgroundColor: expect.any(String),
						buttonFontColor: expect.any(String),
					})
				);
			});
	});

	it("GET /api/invitations/id --> 404 not found", () => {
		return request(app).get("/api/invitations/999999999").expect(404);
	});

	it("POST /api/invitations --> create invitations", () => {
		return request(app)
			.post("/api/invitations")
			.send(invitationAddTestData)
			.expect(201)
			.then((response) => {
				expect.objectContaining(invitationAddTestData);
			});
	});

	it("PUT /invitations/id --> edit invitations by id", () => {
		return request(app)
			.put(`/api/invitations/${id}`)
			.send(invitationEditTestData)
			.expect(201)
			.then((response) => {
				expect.objectContaining(invitationEditTestData);
			});
	});

	it("PUT /api/invitations/id --> 404 not found", () => {
		return request(app).put("/api/invitations/999999999").expect(404);
	});

	it("DELETE /api/invitations/id --> delete invitations by id", () => {
		return request(app).delete(`/api/invitations/${id}`).expect(200);
	});

	it("DELETE /api/invitations/id --> 404 not found", () => {
		return request(app).delete("/api/invitations/999999999").expect(404);
	});
});
