import React from 'react'
import pic from '../../pic/sa-copy.png'

export default function Sign_in() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <form class="col col-lg-6 col-md-10 bg-light mx-auto p-3" id="form">
                        <h2 class="text-center mb-5">
                            Sign In
                        </h2>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="Name" required/>
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="password" class="form-control rounded-pill" id="floatingPassword" placeholder="Password" required/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember password
                            </label>
                        </div>
                        <div class="d-grid col-12 mx-auto">
                            <button class="btn btn-success rounded-pill m-3 btn-lg" type="submit">
                                <span class="text-uppercase small">
                                    Sign In
                                </span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
