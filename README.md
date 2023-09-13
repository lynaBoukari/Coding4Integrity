# Exam Paper Anti-Leakage Platform

## Overview

This repository contains the source code and documentation for an anti-leakage solution aimed at reducing the risk of exam paper leakage. The platform is designed to generate calibrated and fair exam papers using exercises or questions suggested by teachers. It ensures that exam papers are not accessible or viewable by teachers until the specified time of reveal, thus minimizing the opportunity for leaks. The generated exam papers satisfy multiple constraints, including maximum points, a specific number of exercises, different chapters and a calibrated level of difficulty. 


## Key Features

- **Secure Exam Paper Management**: Exam papers are securely stored and cannot be accessed until the designated time.

- **Efficient Paper Generation**: The platform uses a Genetic Algorithm and Knowledge Graph to automatically create exam papers that meet predefined criteria, such as a balanced distribution of exercises, total points, and chapters.

- **User Roles**:
  - **Admin/Coordinator**: Assigns exercise upload tasks to teachers.
  - **Teachers**: Upload exercises to the platform.

- **Exercise Metadata**: Stores exercise information, including ID, name, points, chapter, and a link to the uploaded PDF.

- **ML Model**: Classifies exercise difficulty levels and updates exercise metadata.

- **Neural Network Model**: A neural network model is employed to classify exercise difficulty levels based on exercise text data. This model helps in automating the process of categorizing exercises as Easy, Medium, or Hard.

## Usage

1. Admins or Coordinators assign exercise upload tasks to teachers.

2. Teachers upload exercises, including a PDF file and associated details.

3. The ML model classifies exercise difficulty levels and updates exercise metadata.

4. The Neural Network model classifies exercise difficulty levels based on exercise text data.

5. Use the Genetic Algorithm with Knowledge Graph to generate optimized exam papers.

6. Exam papers are securely stored in Microsoft Cloud and remain inaccessible until the designated time of reveal.

---

This revised README now includes a section dedicated to the Neural Network model, explaining its purpose and contribution to the platform.
