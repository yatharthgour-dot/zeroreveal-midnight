# ZeroReveal

## Privacy-Preserving Eligibility Verification on Midnight

ZeroReveal is a privacy-preserving application built on the Midnight blockchain.

The project allows users to prove that they satisfy a financial or eligibility requirement without revealing their underlying sensitive information.

For example:

- A user has a monthly salary of ₹75,000.
- A service requires a minimum salary of ₹50,000.
- ZeroReveal verifies that the user satisfies the requirement.
- The user's exact salary does not need to be disclosed.

## Problem

Many online services require users to reveal sensitive personal information to prove eligibility.

For example:

- Salary
- Income
- Age
- Employment information
- Credit information

This creates unnecessary privacy and data-security risks.

## Solution

ZeroReveal uses Midnight's privacy-preserving smart contract capabilities to allow users to prove eligibility while minimizing the information they reveal.

Instead of:

> "Here is my salary: ₹75,000"

the user can prove:

> "My salary satisfies the required threshold."

## Core Features

- Privacy-preserving eligibility verification
- Private user information
- Verifiable results
- Selective disclosure
- Midnight smart contract
- Zero-knowledge proof based verification
- Web-based user interface

## Example

### Input

Actual salary:

₹75,000/month

Required salary:

₹50,000/month

### Result

✅ Eligibility confirmed

The verifier does not need to receive the user's exact salary.

## Technology Stack

- Midnight Blockchain
- Compact
- Midnight.js
- TypeScript
- React
- Vite
- Node.js

## Architecture

```text
User
  |
  v
React Frontend
  |
  v
Midnight.js
  |
  v
Compact Smart Contract
  |
  v
Zero-Knowledge Proof
  |
  v
Eligibility Result
