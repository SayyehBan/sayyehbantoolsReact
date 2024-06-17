import React from "react";

export interface BrunoProps{
    yourName : string;
}
export default function Bruno({yourName}:BrunoProps) {
    return <div>درود سایه بان,{ yourName}!</div>
}