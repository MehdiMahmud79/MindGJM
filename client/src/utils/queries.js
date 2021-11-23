import { gql } from "@apollo/client";

// Graphql queries
export const getUser = gql`
  query getMe {
    me {
      _id
      username
      email
      
    }
  }
`;

export const getSingleQuiz = gql`
  query getQuiz {
    getQuiz(_id: ID) {
      _id
      title
      author_id
      author
      created_at
      scores
      questions {
        question
        correct_answer
        incorrect_answers
        category
        type
        difficulty
      }
    }
  }
`;
export const getAllQuizzes = gql`
  query {
    getAllQuizzes {
      _id
      title
      author_id
      author
      created_at
      scores
      questions {
        question
        correct_answer
        incorrect_answers
        category
        type
        difficulty
      }
    }
  }
`;

export const getUserQuizzes = gql`
  query {
    getUserQuizzes {
      _id
      title
      author_id
      author
      created_at
      scores
      questions {
        question
        correct_answer
        incorrect_answers
        category
        type
        difficulty
      }
    }
  }
`;

// Graphql Mutations

export const signUpMutation = gql`
  mutation signUp(
    $username: String!
    $email: String!
    $password: String!
    $password2: String!
  ) {
    signUp(
      username: $username
      email: $email
      password: $password
      password2: $password2
    ) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const loginUserMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const addQuizMutation = gql`
  mutation addQuiz($title: String!, $questions: [Question!]) {
    addQuiz(title: $title, questions: $questions) {
      _id
      title
      author_id
      author
      created_at
      questions {
        question
        correct_answer
        incorrect_answers
        category
        type
        difficulty
      }
      scores
    }
  }
`;

export const AddScoreToQuizMutation = gql`
  mutation AddScoreToQuiz($id: ID!, $score: String!) {
    AddScoreToQuiz(_id: $id, score: $score) {
      _id
      title
      author_id
      author
      created_at
      questions {
        question
        correct_answer
        incorrect_answers
        category
        type
        difficulty
      }
      scores
    }
  }
`;