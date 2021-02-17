import React from "react";
import Layout from "../layout/layout";
import teamStyles from "../styles/pages/team.module.scss";
import facultyData from "../data/faculty.json";
import studentData from "../data/students.json";
import Faculty from "../components/faculty";
import Student from "../components/student";
import Member from "../components/member";

const Team = () => {
  const leaderData = studentData.filter((student)=>student.leader==="TRUE")
  const memberData = studentData.filter((student)=>student.leader!=="TRUE")
  return (
    <Layout>
      <div className={teamStyles.container}>
        <div className={teamStyles.topSection}>
          <h2 className={teamStyles.titleLarge}>Team</h2>
          <div className={teamStyles.faculty}>
            {facultyData.map((faculty, key) => (
              <Faculty
                key={key}
                name={faculty.name}
                image={faculty.image}
                credit={faculty.credit}
                position={faculty.position}
                responsibility={faculty.responsibility}
                profile_a={faculty.profile_a}
                profile_b={faculty.profile_b}
              />
            ))}
          </div>
          <h1>
            学生有志チーム
          </h1>
          <p style={{color:"gray", fontWeight:500}}> 慶応義塾大学 学生有志・東京大学 学生有志</p>
          <div className={teamStyles.studentLeaders}>
            <h2>チームリーダー</h2>
            {leaderData.map((student, i) => (
              <Student
                key={i}
                image={student.image}
                name={student.name}
                position={student.position}
                responsibility={student.responsibility}
                leader={student.leader}
                profile={student.profile}
              />
            ))}
          </div>
          <h2>チームメンバーー</h2>
          <div className={teamStyles.studentMembers}>
            {memberData.map((student, i) => (
              <Member
                key={i}
                image={student.image}
                name={student.name}
                position={student.position}
                responsibility={student.responsibility}
                leader={student.leader}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
