# IT313 Laboratory: Student Roster Card Renderer

## Problem Description

The Student Roster Card Renderer is a simple React Native application developed using Expo. Its purpose is to display a list of currently enrolled IT313 students using reusable student cards.

Each card displays the student's name, course, and enrolled units. A "Full Load" label appears only when the student's `isFullLoad` property is `true`. The screen also displays the total number of students, calculated automatically from the student array.

## Component Structure

### 1. StudentCard

`StudentCard` is a reusable functional component that receives four props: `name`, `course`, `units`, and `isFullLoad`.

The component uses props destructuring in its function signature and JSX to display the student's information. Conditional rendering with `&&` ensures that the "Full Load" label appears only when the student has a full load.

### 2. StudentRoster

`StudentRoster` is the parent component that stores the student data using React state.

It uses the `.map()` method to render one `StudentCard` for each student. Each card receives the student's properties through props and uses `key={student.id}` to provide a stable identity.

The header displays the total number of students using the JSX expression `${students.length}`. A button allows the roster to be reversed for testing how React handles list keys.

## React Concepts Demonstrated

* Functional components
* Props and props destructuring
* JSX expressions
* Conditional rendering
* Rendering arrays with `.map()`
* Stable keys using student IDs
* React state with `useState`
* Handling button events
* TypeScript type definitions for student data and component props

## How to Run the Application

### Prerequisites

* Node.js and npm
* An Expo-compatible development environment
* A code editor such as Visual Studio Code

### Instructions

1. Open a terminal in the project directory.

2. Install the project dependencies if needed:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npx expo start
   ```

4. Open the application using an available emulator, connected device, or supported web environment.

## Testing

Verify the following:

1. Four student cards are displayed.
2. The header shows `Total Students: 4`.
3. Ana Cruz and Cid Ramos display the "Full Load" label.
4. Bea Santos and Dex Alonzo do not display the label.
5. The Reverse Roster button reverses the displayed order.
6. The roster works correctly with `key={student.id}`.
7. Temporarily changing the key to the array index demonstrates why stable keys are preferred for reorderable lists.

## Conclusion

This project demonstrates how React Native components can be organized into reusable units. It also illustrates how props, JSX, conditional rendering, arrays, state, and stable keys work together to create a functional student roster screen.
