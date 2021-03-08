import React from 'react';
import styled from 'styled-components';



function ReviewForm() {
    return (
        <div className="wrapper">
            <form>
                <div>Have an experience with [Airline Name]? Share Your Review</div>
                <div className="field">
                    <input type="text" name="title" placeholder="Review Title" />
                </div>
                <div className="field">
                    <input type="description" name="description" placeholder="Review Description" />
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating__titleText">Rate This Airline</div>
                        [Star Rating Goes Here]
                    </div>
                </div>
                <button type="submit">Submit Your Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;
