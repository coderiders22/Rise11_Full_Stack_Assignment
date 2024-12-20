# Dashboard Replica Assignment

## **Objective**
This project is a replica of the dashboard provided in the attached image, built from scratch using React.js without using any pre-made templates. The assignment focuses on replicating the design as closely as possible, ensuring responsiveness, dynamic functionality, and clean, modular code.

---

## **Approach**

### **1. Initial Planning**
- Carefully analyzed the attached dashboard image to identify all components (e.g., navigation menu, progress bar, input fields, buttons, etc.).
- Broke down the design into modular and reusable components, such as:
  - NavigationMenu
  - ProgressBar
  - FormSection
  - DashboardLayout
- Decided to use **React.js** for the frontend and **CSS/Tailwind CSS** for styling. No external libraries were used for layout replication to showcase pure CSS/HTML skills.

### **2. Implementation Steps**
1. **Setting Up the Project**: Initialized the project using `create-react-app` for React.js.
2. **Modular Components**:
   - Created separate folders for each component to maintain clean and organized code.
   - Followed a modular approach to ensure reusability and scalability.
3. **Styling**:
   - Used **CSS Flexbox** and **Grid** for the layout.
   - Ensured the color palette, font sizes, and spacing matched the provided design.
4. **Responsive Design**:
   - Used media queries to adapt the design for different screen sizes (desktop, tablet, and mobile).
5. **Dynamic Elements**:
   - Enabled interaction for checkboxes, dropdowns, and file upload buttons.
   - Included form validation to ensure no empty submissions.
6. **Testing**:
   - Tested the dashboard thoroughly on various devices and browsers to ensure consistency and responsiveness.

---

## **Challenges Faced and Solutions**

### **1. Responsiveness for Mobile Devices**
- **Challenge**: The layout didn’t align properly for smaller screens.
- **Solution**:
  - Refactored the CSS to use a mobile-first approach with additional media queries.
  - Adjusted padding, margins, and font sizes dynamically based on screen width.

### **2. Handling Dynamic Interactions**
- **Challenge**: Ensuring smooth interactions for file uploads and dropdowns.
- **Solution**:
  - Utilized React state management to track and update user interactions dynamically.
  - Validated file uploads with restrictions on file type and size.

### **3. Time Management**
- **Challenge**: Building the entire dashboard from scratch took extra time compared to using a template.
- **Solution**:
  - Maintained focus and prioritized quality over speed.
  - Broke the task into smaller milestones to stay on track.

---

## **Assumptions**
- The assignment focused purely on frontend development, so no backend/API integration was included.
- For dynamic functionality (e.g., progress bar updates), mock data was used to simulate interactions.
- Assumed that some placeholders in the image, such as profile icons or chart data, could be replaced with static examples for demonstration purposes.

---

## **Features Implemented**
- **Exact Design Replica**: The dashboard matches the provided image in terms of layout and styling.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Form Validation**: Prevents empty submissions and ensures valid data entry.
- **Dynamic Elements**: Functional checkboxes, dropdowns, and file upload buttons.
- **Clean and Modular Code**: Reusable components for better maintainability and scalability.

---

## **Technology Stack**
- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS

---

## **How to Run the Project**
1. Clone this repository:
   ```bash
   git clone https://github.com/coderiders22/Rise11_Full_Stack_Assignment
   ```
2. Navigate to the project folder:
   ```bash
   cd Rise11_Full_Stack_Assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the project in your browser:
   ```
   http://localhost:3000
   ```

---

## **Conclusion**
This project was a rewarding experience. Building the dashboard from scratch improved my attention to detail, problem-solving skills, and proficiency with React.js and CSS. It was challenging yet enjoyable to create a professional, responsive, and dynamic user interface.
