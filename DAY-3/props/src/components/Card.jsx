import React from "react";

function Card(props) {
  return (
    <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
      <div>
        <img class="size-48 shadow-xl rounded-md" alt="" src={props.img} />
      </div>
      <div class="flex flex-col items-center">
        <span class="text-2xl font-medium">{props.movie}</span>
        <span class="font-medium text-sky-500">Actor: {props.actor}</span>
        <span class="flex gap-2 flex-col font-medium text-gray-600 dark:text-gray-400">
          <span>Rate: {props.rate}</span>
          <span>Year: {props.year}</span>
        </span>
      </div>
    </div>
    
  );
}

export default Card;
