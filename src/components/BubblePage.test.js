import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from '../api/fetchColors'
jest.mock('../api/fetchColors');

const testColors = {
  colors:[
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
    }
  ]
}



test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(testColors)
  render(<BubblePage/>)

  const colors = await screen.findAllByTestId('color')
  
  expect(colors).toHaveLength(11)




});



//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading