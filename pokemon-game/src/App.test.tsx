import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  // Rendering Tests
  it("Has the Draw Button rendered", () => {
    const element = screen.getByText("Draw Card");

    expect(element).toBeInTheDocument();
  })

  it("Does not show the Attack button", () => {
    const element = screen.queryByTestId("Attack");

    expect(element).not.toBeInTheDocument();
  });

  // Logic Tests
  function playerAttack(pok2Health: number, pok1Attack: number) {
    if (pok2Health > pok1Attack){
      pok2Health = pok2Health - pok1Attack;
    }
    else {
      pok2Health = 0;
    }
    return pok2Health;
  }
  describe('playerAttack', () => {
    test('Correctly calculates playerAttack', () => {
      expect(playerAttack(100, 20)).toBe(80);
    })
  })
  describe('playerAttack', () => {
    test('Correctly calculates playerAttack to hit 0 instead of negative', () => {
      expect(playerAttack(15, 20)).toBe(0);
    })
  })


})
