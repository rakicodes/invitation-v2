const request = require("supertest");
const app = require("../app");
const {
  invitationAddTestData,
	publicInvitationAddTestData,
  privateInvitationAddTestData,
	invitationEditTestData,
  invitationRegisterTestData,
  invitationLoginTestData,
  unauthorizedUserLoginTestData,
  unauthorizedUserRegisterTestData,
  invitationMissingMessageEditTestData,
  invitationMissingImageEditTestData,
} = require("./invitation.data");

describe("Invitations API", () => {
	let publicInvitationId;
	let token;
  let userId;
  let unauthorizedUserToken;
  let unauthorizedUserId;
	beforeAll(async () => {
    await request(app).post("/api/auth/register").send(invitationRegisterTestData).expect(201);
    const responseUser = await request(app).post("/api/auth/login").send(invitationLoginTestData).expect(200);
    token = responseUser.body.token
    userId = responseUser.body._id


    await request(app).post("/api/auth/register").send(unauthorizedUserRegisterTestData).expect(201);
    const responseUnauthorizedUser = await request(app).post("/api/auth/login").send(unauthorizedUserLoginTestData).expect(200);
    unauthorizedUserToken = responseUnauthorizedUser.body.token
    unauthorizedUserId = responseUnauthorizedUser.body._id

		await request(app).post("/api/invitations").set('Authorization',  `Bearer ${token}`).send(publicInvitationAddTestData).expect(201);
		await request(app).post("/api/invitations").set('Authorization',  `Bearer ${token}`).send(privateInvitationAddTestData).expect(201);

		const response = await request(app).get("/api/invitations");
		publicInvitationId = response.body[0]._id;
    privateInvitationId = response.body[1]._id;
	}, 10000);
	afterAll(async () => {
		await request(app).delete("/api/invitations");
	});
	describe("getInvitations", () => {
		it("GET /api/invitations --> should return an array of invitations", () => {
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
	});

	describe("getInvitation", () => {
		it("GET /api/invitations/id --> should return the invitation by the specified id when user is not authorized if invitation is public", () => {
			return request(app)
				.get(`/api/invitations/${publicInvitationId}`)
				.expect("Content-Type", /json/)
        .set('Authorization',  `Bearer ${unauthorizedUserToken}`)
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
							isPublic: true,
							backgroundColor: expect.any(String),
							fontColor: expect.any(String),
							buttonBackgroundColor: expect.any(String),
							buttonFontColor: expect.any(String),
						})
					);
				});
		});

    it("GET /api/invitations/id --> should return the invitation if user is authorized and invitation is public", () => {
      return request(app)
      .get(`/api/invitations/${publicInvitationId}`)
      .expect("Content-Type", /json/)
      .set('Authorization',  `Bearer ${token}`)
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
            isPublic: true,
            backgroundColor: expect.any(String),
            fontColor: expect.any(String),
            buttonBackgroundColor: expect.any(String),
            buttonFontColor: expect.any(String),
          })
        );
      });
    });

		it("GET /api/invitations/id --> should return the invitation if user is authorized and invitation is private", () => {
      return request(app)
      .get(`/api/invitations/${privateInvitationId}`)
      .expect("Content-Type", /json/)
      .set('Authorization',  `Bearer ${token}`)
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
            isPublic: false,
            backgroundColor: expect.any(String),
            fontColor: expect.any(String),
            buttonBackgroundColor: expect.any(String),
            buttonFontColor: expect.any(String),
          })
        );
      });
    });

		it("GET /api/invitations/id --> should throw an error if user is not authorized and invitation is private", () => {
      return request(app)
				.get(`/api/invitations/${privateInvitationId}`)
				.expect("Content-Type", /json/)
        .set('Authorization',  `Bearer ${unauthorizedUserToken}`)
				.expect(401)
    });

		it("GET /api/invitations/id --> should throw an error if id is not found", () => {
			return request(app).get("/api/invitations/999999999").set('Authorization',  `Bearer ${token}`).expect(404);
		});
	});

	describe("addInvitation", () => {
		it("POST /api/invitations --> should create an invitation", () => {
			return request(app)
				.post("/api/invitations")
        .set('Authorization',  `Bearer ${token}`)
				.send(invitationAddTestData)
				.expect(201)
				.then((response) => {
					expect.objectContaining(invitationAddTestData);
				});
		});

		it("POST /api/invitations --> should throw an error if user is not authorized", () => {});

		it("POST /api/invitations --> should throw an error if message, successMessage, or failedMessage are missing", () => {});

		it("POST /api/invitations --> should throw an error if messageImage, successImage, or failedImage are missing", () => {});
	});

	describe("editInvitation", () => {
		it("PUT /invitations/id --> edit invitations by id", () => {
			return request(app)
				.put(`/api/invitations/${publicInvitationId}`)
        .set('Authorization',  `Bearer ${token}`)
				.send(invitationEditTestData)
				.expect(201)
				.then((response) => {
					expect.objectContaining(invitationEditTestData);
				});
		});

		it("PUT /api/invitations/id --> should throw an error if user is not authorized to edit invitation", () => {
      return request(app)
				.put(`/api/invitations/${publicInvitationId}`)
        .set('Authorization',  `Bearer ${unauthorizedUserToken}`)
				.send(invitationEditTestData)
				.expect(201)
    });

		it("PUT /api/invitations/id --> should throw an error if message, successMessage, or failedMessage are missing", () => {
      return request(app)
      .put(`/api/invitations/${publicInvitationId}`)
      .set('Authorization',  `Bearer ${token}`)
      .send(invitationMissingMessageEditTestData)
      .expect(400)
    });

		it("PUT /api/invitations/id --> should throw an error if messageImage, successImage, or failedImage are missing", () => {
      return request(app)
      .put(`/api/invitations/${publicInvitationId}`)
      .set('Authorization',  `Bearer ${token}`)
      .send(invitationMissingImageEditTestData)
      .expect(400)
    });

		it("PUT /api/invitations/id --> 404 not found", () => {
			return request(app).put("/api/invitations/999999999").set('Authorization',  `Bearer ${token}`).expect(404);
		});
	});

	describe("deleteInvitation", () => {
    it("DELETE /api/invitations/id --> should throw an error if user is not authorized to delete invitation", () => {
			return request(app).delete(`/api/invitations/${publicInvitationId}`).set('Authorization',  `Bearer ${unauthorizedUserToken}`).expect(401);
    });

		it("DELETE /api/invitations/id --> delete invitations by id", () => {
			return request(app).delete(`/api/invitations/${publicInvitationId}`).set('Authorization',  `Bearer ${token}`).expect(200);
		});

		it("DELETE /api/invitations/id --> 404 not found", () => {
			return request(app).delete("/api/invitations/999999999").set('Authorization',  `Bearer ${token}`).expect(404);
		});
	});

	describe("deleteInvitations", () => {
		it("DELETE /api/invitations --> should delete all invitations", () => {});
		it("DELETE /api/invitations --> should throw an error if user is not authorized to delete invitations", () => {});
	});
});
