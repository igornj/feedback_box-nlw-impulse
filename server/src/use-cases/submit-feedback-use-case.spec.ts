import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";


//spies = saber se as funções foram chamadas

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,89489489789496489',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });



    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,89489489789496489',
        })).rejects.toThrow();
    });


    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: '',
            screenshot: 'data:image/png;base64,89489489789496489',
        })).rejects.toThrow();
    });


    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'assdasd',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });


});