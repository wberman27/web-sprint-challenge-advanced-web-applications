import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchBubbles as mockFetchBubbles} from '../api/fetchBubbles'
jest.mock('../api/fetchBubbles');

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />)

  
  mockFetchBubbles.mockResolvedValueOnce({
    colors: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 1,
      },
      {
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      },
      {
        color: "aqua",
        code: {
          hex: "#00ffff",
        },
        id: 3,
      },
    ]
  })



});



//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading