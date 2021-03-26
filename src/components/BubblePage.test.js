import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchBubbles as mockFetchBubbles} from '../api/fetchBubbles'
jest.mock('../api/fetchBubbles');

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading