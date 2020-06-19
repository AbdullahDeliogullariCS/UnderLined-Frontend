import React, {useState} from "react";
import axios from "axios";

export function signUpPostUserCredentials(userCredentials) {
    try {
        axios.post(
            "http://localhost:5000/api/users/signup",
            userCredentials)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

export function signInPostVerifyCredentials(userCredentials) {
    try {
        axios.post(
            "http://localhost:5000/api/users/signin",
            userCredentials)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}
