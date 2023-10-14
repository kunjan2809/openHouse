import { CREATE_LISTING_STEP } from "../constant"

export const storeStepData = (step, data) => {
    return { type: CREATE_LISTING_STEP, payload: { step, data } }
}