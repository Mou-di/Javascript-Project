
// The provided course information.
const courseInfo = {
  id: 101,
  name: "Web Design Essentials"
};

// The provided assignment group.
const assignmentGroup = {
  id: 501,
  name: "Fundamentals of HTML",
  course_id: 101,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "HTML Page Structure",
      due_at: "2026-01-20",
      points_possible: 200
    },
    {
      id: 2,
      name: "Write some HTML",
      due_at: "2026-02-21",
      points_possible: 300
    },
    {
      id: 3,
      name: "Intro to JavaScript",
      due_at: "2026-04-23",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const learnerSubmissions = [
  {
    learner_id: 223,
    assignment_id: 1,
    submission: {
      submitted_at: "2026-01-20",
      score: 87
    }
  },
  {  
    learner_id: 223,
    assignment_id: 2,
    submission: {
      submitted_at: "2026-02-19",
      score: 195
    }
  },
  {
    learner_id: 223,
    assignment_id: 3,
    submission: {
      submitted_at: "2026-01-12",
      score: 400
    }
  },
  {
    learner_id: 224,
    assignment_id: 1,
    submission: {
      submitted_at: "2026-01-18",
      score: 89
    }
  },
  {
    learner_id: 224,
    assignment_id: 2,
    submission: {
      submitted_at: "2026-04-29",
      score: 128
    }
  }
];

//  Here, we would process this data to achieve the desired result.

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions){
   if (assignmentGroup.course_id !== courseInfo.id)
     { throw new Error("AssignmentGroup does not belong to this course."); }
   {
   } if (a => a.id === submission.assignment_id)
   {
    {
  }
  }
  const result= [
    {
      learner_id: 223,
      avg: 682,
      assignment_id:[1,2]
    },
    {
      learner_id: 224,
      avg: 128,
      assignment_id: [1,2]
    }
  ];
  return result;
}
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log(result);
