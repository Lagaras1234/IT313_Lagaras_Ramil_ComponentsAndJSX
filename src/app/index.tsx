
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

type Student = {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

// Reusable component: displays one student's information
function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.studentName}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

// Parent component: stores and renders the student roster
export default function StudentRoster() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "s1",
      name: "Ana Cruz",
      course: "IT313",
      units: 21,
      isFullLoad: true,
    },
    {
      id: "s2",
      name: "Bea Santos",
      course: "IT313",
      units: 15,
      isFullLoad: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      course: "IT313",
      units: 18,
      isFullLoad: true,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      course: "IT313",
      units: 12,
      isFullLoad: false,
    },
  ]);

  const reverseRoster = () => {
    setStudents((currentStudents) =>
      [...currentStudents].reverse()
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>IT313 Student Roster</Text>

      <Text style={styles.count}>
        {`Total Students: ${students.length}`}
      </Text>

      <View style={styles.button}>
        <Button
          title="Reverse Roster"
          onPress={reverseRoster}
        />
      </View>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#F3F6FA",
    flexGrow: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#174EA6",
  },
  count: {
    fontSize: 16,
    marginBottom: 16,
    color: "#555555",
  },
  button: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DCE3ED",
  },
  studentName: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222222",
  },
  fullLoad: {
    color: "#16803D",
    fontWeight: "bold",
    marginTop: 8,
  },
});