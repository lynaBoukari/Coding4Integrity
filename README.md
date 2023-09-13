# Exam Paper Anti-Leakage Platform

## Overview

This repository contains the source code and documentation for an anti-leakage solution aimed at reducing the risk of exam paper leakage. The platform is designed to ensure that exam papers are not accessible or viewable until the specified time of reveal, thus minimizing the opportunity for leaks.

## Key Features

- **Secure Exam Paper Management**: Exam papers are securely stored and cannot be accessed until the designated time.

- **Efficient Paper Generation**: The platform uses a Genetic Algorithm and Knowledge Graph to automatically create exam papers that meet predefined criteria, such as a balanced distribution of exercises, total points, and chapters.

- **User Roles**:
  - **Admin/Coordinator**: Assigns exercise upload tasks to teachers.
  - **Teachers**: Upload exercises to the platform.

- **Exercise Metadata**: Stores exercise information, including ID, name, points, chapter, and a link to the uploaded PDF.

- **ML Model**: Classifies exercise difficulty levels and updates exercise metadata.

## Usage

1. Admins or Coordinators assign exercise upload tasks to teachers.

2. Teachers upload exercises, including a PDF file and associated details.

3. The ML model classifies exercise difficulty levels and updates exercise metadata.

4. Use the Genetic Algorithm with Knowledge Graph to generate optimized exam papers.

5. Exam papers are securely stored in Microsoft Cloud and remain inaccessible until the designated time of reveal.


---

This revised README highlights the core functionalities and the key benefit of the platform, which is to reduce the risk of exam leakage to a small time window during the distribution and printing of exam papers.
