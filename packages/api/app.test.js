const request = require("supertest");
const app = require("./app");

describe("Invitations API", () => {
  it("GET /api/invitations --> array of invitations", () => {
    return request(app)
      .get("/api/invitations")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              _id: expect.any(String),
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
            }),
          ]),
        );
      });
  });

  it("GET /api/invitations/id --> specific invitation by id", () => {
    return request(app)
      .get("/api/invitations/6611646d51c93015f5ebf96b")
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
          }),
        );
      });
  });

  it("GET /api/invitations/id --> 404 not found", () => {
    return request(app).get("/api/invitations/999999999").expect(404);
  });

  it("POST /api/invitations --> create invitations", () => {
    return request(app)
      .post("/api/invitations")
      .send({
        message: "Hiii! Wanna go to Edmonton with me on March 2?",
        messageImage:
          "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW91d2Nyd2tjcHBpYndkNDFkaGNuNGhkYnUwMm1zN2M5dzdzbm43NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRIY7gVfIV5AMwNbha/giphy.gif",
        responseEffect: true,
        response: "",
        successImage:
          "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZuZHF2YWtnbmd3bGRvZ3ZkbXBjOGo5ZjRqZHprNHFzZ2EydHUxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3q2PV2UDy0VYKUvZSk/giphy.gif",
        successMessage: "Yayyyy!!! I'm excited!! :P",
        failedImage:
          "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF6Y2ZrYzRzOTE1NTgxNnNud2Q4d3NlYXFiZW8ydjQ3eDVsYnNsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6qqfYC0LyAvWYKd8iW/giphy.gif",
        failedMessage: "awww :'(",
        recepient: "NY",
        isPublic: true,
        backgroundColor: "#f3ccd9",
        fontColor: "#fff9fb",
        buttonBackgroundColor: "#b25674",
        buttonFontColor: "#fff9fb",
      })
      .expect(201)
      .then((response) => {
        expect.objectContaining({
          message: "Hiii! Wanna go to Edmonton with me on March 2?",
          messageImage:
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW91d2Nyd2tjcHBpYndkNDFkaGNuNGhkYnUwMm1zN2M5dzdzbm43NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRIY7gVfIV5AMwNbha/giphy.gif",
          responseEffect: true,
          response: "",
          successImage:
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZuZHF2YWtnbmd3bGRvZ3ZkbXBjOGo5ZjRqZHprNHFzZ2EydHUxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3q2PV2UDy0VYKUvZSk/giphy.gif",
          successMessage: "Yayyyy!!! I'm excited!! :P",
          failedImage:
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF6Y2ZrYzRzOTE1NTgxNnNud2Q4d3NlYXFiZW8ydjQ3eDVsYnNsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6qqfYC0LyAvWYKd8iW/giphy.gif",
          failedMessage: "awww :'(",
          recepient: "NY",
          isPublic: true,
          backgroundColor: "#f3ccd9",
          fontColor: "#fff9fb",
          buttonBackgroundColor: "#b25674",
          buttonFontColor: "#fff9fb",
        });
      });
  });

  it("PUT /invitations/id --> edit invitations by id", () => {
    return request(app)
      .put("/api/invitations/6611646d51c93015f5ebf96b")
      .send({
        message: "Hiii! Wanna go to Edmonton with me on March 21?",
        messageImage:
          "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW91d2Nyd2tjcHBpYndkNDFkaGNuNGhkYnUwMm1zN2M5dzdzbm43NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRIY7gVfIV5AMwNbha/giphy.gif",
        responseEffect: true,
        response: "",
        successImage:
          "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZuZHF2YWtnbmd3bGRvZ3ZkbXBjOGo5ZjRqZHprNHFzZ2EydHUxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3q2PV2UDy0VYKUvZSk/giphy.gif",
        successMessage: "Yayyyy!!! I'm excited!! :P",
        failedImage:
          "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF6Y2ZrYzRzOTE1NTgxNnNud2Q4d3NlYXFiZW8ydjQ3eDVsYnNsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6qqfYC0LyAvWYKd8iW/giphy.gif",
        failedMessage: "awww :'(",
        recepient: "NY",
        isPublic: true,
        backgroundColor: "#f3ccd9",
        fontColor: "#fff9fb",
        buttonBackgroundColor: "#b25674",
        buttonFontColor: "#fff9fb",
      })
      .expect(201)
      .then((response) => {
        expect.objectContaining({
          message: "Hiii! Wanna go to Edmonton with me on March 21?",
          messageImage:
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW91d2Nyd2tjcHBpYndkNDFkaGNuNGhkYnUwMm1zN2M5dzdzbm43NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRIY7gVfIV5AMwNbha/giphy.gif",
          responseEffect: true,
          response: "",
          successImage:
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZuZHF2YWtnbmd3bGRvZ3ZkbXBjOGo5ZjRqZHprNHFzZ2EydHUxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3q2PV2UDy0VYKUvZSk/giphy.gif",
          successMessage: "Yayyyy!!! I'm excited!! :P",
          failedImage:
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF6Y2ZrYzRzOTE1NTgxNnNud2Q4d3NlYXFiZW8ydjQ3eDVsYnNsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6qqfYC0LyAvWYKd8iW/giphy.gif",
          failedMessage: "awww :'(",
          recepient: "NY",
          isPublic: true,
          backgroundColor: "#f3ccd9",
          fontColor: "#fff9fb",
          buttonBackgroundColor: "#b25674",
          buttonFontColor: "#fff9fb",
        });
      });
  });

  it("PUT /api/invitations/id --> 404 not found", () => {
    return request(app).put("/api/invitations/999999999").expect(404);
  });
});
