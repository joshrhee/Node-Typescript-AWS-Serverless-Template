import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = event.body;
    const parsedBody = JSON.parse(requestBody || '');
    return {
      statusCode: 200,
      body: `Goodbye ${parsedBody?.name}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'An error occured',
    };
  }
};
