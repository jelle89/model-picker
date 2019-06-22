export function addModel(model) {
    return {
        type: "ADD_MODEL",
        payload: model
    }
}

export const ADD_MODEL = "ADD_MODEL"