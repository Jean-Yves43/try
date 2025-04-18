import React from 'react';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // Assuming event type or other conditions to conditionally show "Order Details" or price
  const showOrderDetails = props.price && props.price !== 'FREE'; // Show only if price is not free
  const showPrice = props.price !== null && props.price !== undefined;

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
          width: '100%',
        }}
      />

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {/* Conditional rendering for price */}
        {showPrice && (
          <div className="flex gap-2">
            <span className="text-sm font-semibold rounded-full bg-green-100 px-4 py-1 text-green-600">
              {props.price || 'FREE'}
            </span>
            <p className="text-sm font-semibold rounded-full bg-gray-100 px-4 py-1 text-gray-500">
              {props.type}
            </p>
            <p className="text-sm font-semibold rounded-full bg-gray-100 px-4 py-1 text-gray-500">{props.location}</p>
          </div>
        )}

        {/* Location Display */}
        

        {/* Brief Description */}
        <p className="text-sm text-gray-600">{props.description}</p>

        <p className="text-sm text-gray-500">{props.dateTime}</p>

        <Link to="#">
          <p className="text-lg font-medium text-black">{props.title}</p>
        </Link>

        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-gray-600">
            {props.organizerFName} {props.organizerLName}
          </p>

          {/* Conditional rendering for Order Details link */}
          {showOrderDetails && (
            <Link to={`/order-details/${props.id}`} className="flex items-center gap-2 text-blue-600 hover:underline">
              <span>Order Details</span>
              <FaSquareArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
