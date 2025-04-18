import React, { useState } from 'react'
import img1 from "../../assets/products/gswVsGr.jpeg";
import img2 from "../../assets/products/gswVsLak.jpeg";
import img3 from "../../assets/products/conf.jpeg";
import img4 from "../../assets/products/conf.jpeg";
import { FaStar } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '../Cards/Card';
import { Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Basketball Finals",
    eventType: "Sports",
    location: "San Francisco",
    description: "Golden State vs Grizzlies",
    rating: 4.5,
    price: "FREE",
  },
  {
    id: 2,
    img: img2,
    title: "Basketball Semi Finals",
    eventType: "Sports",
    location: "Los Angeles",
    description: "Golden State vs Lakers",
    rating: 5.0,
    price: "100$",
  },
  {
    id: 3,
    img: img3,
    title: "Tech Conference 2025",
    eventType: "Conference",
    location: "New York",
    description: "Latest trends in tech & AI",
    rating: 4.0,
    price: "200$",
  },
  {
    id: 4,
    img: img4,
    title: "Medical Summit",
    eventType: "Conference",
    location: "Boston",
    description: "World Health Symposium",
    rating: 4.2,
    price: "300$",
  },
  {
    id: 5,
    img: img1,
    title: "Charity Match",
    eventType: "Sports",
    location: "Chicago",
    description: "Fundraiser event match",
    rating: 4.5,
    price: "FREE",
  },
];

const eventTypes = [...new Set(ProductsData.map((e) => e.eventType))];
const locations = [...new Set(ProductsData.map((e) => e.location))];

const TopEvents = () => {
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredEvents = ProductsData
    .filter(item =>
      (!selectedEventType || item.eventType === selectedEventType) &&
      (!selectedLocation || item.location === selectedLocation) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "rating") {
        return b.rating - a.rating;
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div>
      <div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
        {/* Header section */}
        <div className='text-center mb-12'>
          <p data-aos="fade-up" className='text-sm text-red-500'>
            Top Rated Events
          </p>
          {/* Filters */}
          <div className='flex flex-wrap items-center justify-end gap-3 mt-4'>
            <Autocomplete
              disablePortal
              options={eventTypes}
              onChange={(e, newValue) => setSelectedEventType(newValue)}
              value={selectedEventType}
              sx={{ width: 180 }}
              renderInput={(params) => <TextField {...params} label="Event Type" />}
            />
            <Autocomplete
              disablePortal
              options={locations}
              onChange={(e, newValue) => setSelectedLocation(newValue)}
              value={selectedLocation}
              sx={{ width: 180 }}
              renderInput={(params) => <TextField {...params} label="Location" />}
            />
            <TextField
              label="Search by Title"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: 200 }}
            />
            <FormControl sx={{ width: 150 }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                label="Sort By"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
                <MenuItem value="title">Title</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setSelectedEventType(null);
                setSelectedLocation(null);
                setSearchTerm("");
                setSortOption("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* BODY section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center 
        bg-gray-300 w-full rounded-lg'>
          
            {filteredEvents.length > 0 ? (
              filteredEvents.map((item) => (
              <Card
              key={item.id}
              image={item.img}
              title={item.title} 
              dateTime="May 12, 2025" 
              price={item.price} 
              type={item.eventType}
              description={item.description}
              location={item.location}
              organizerFName="John" 
              organizerLName="Doe"
              />
            ))
          ) : (
            <p className='text-center text-gray-500 col-span-full'>
              No events match your filters.
            </p>
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default TopEvents;
