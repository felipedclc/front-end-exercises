import { GET_IMAGE, REQUEST_IMAGE, FAILED_REQUEST } from './actionsTypes';

function getImage(json) {
  return {
    type: GET_IMAGE,
    data: json.message,
  };
}

function requestDogImage() {
  return {
    type: REQUEST_IMAGE,
  };
}

function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    data: error,
  };
}

export { getImage, requestDogImage, failedRequest }