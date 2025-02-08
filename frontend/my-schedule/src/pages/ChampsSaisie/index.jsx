import React from "react";

export default function ChampsSaisie() {

    return (
        <div>
            <form>
                <h2>Today's Goals</h2>
                <p><input type="text" placeholder="Enter your goals for today"/> </p>
                <h2>Schedule Start Time</h2>
                <p><input type="date" placeholder="Enter the start time for the schedule (HH:MM format)"/> </p>
                <h2>Schedule End Time</h2>
                <p><input type="date" placeholder="Enter the end time for the schedule (HH:MM format)"/> </p>



            </form>
        </div>


    )
}