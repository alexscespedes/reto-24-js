function getStudentAverage(students) {
    const studentsWithAverage = students.map((student) => {
        const grades = student.grades;
        const average = grades.reduce((total, item) => total + item, 0) / grades.length;
        return {
            name: student.name,
            average: Number(average.toFixed(2)),
        };
    });

    const classAverage = studentsWithAverage.reduce((total, student) => total + student.average, 0) / studentsWithAverage.length;

    const rta = {
        classAverage: Number(classAverage.toFixed(2)),
        students: studentsWithAverage,
    };

    console.log(rta) 
    }

    getStudentAverage([
        {
            name: "Pedro",
            grades: [90, 87, 88, 90],
            },
            {
            name: "Jose",
            grades: [99, 71, 88, 96],
            },
            {
            name: "Maria",
            grades: [92, 81, 80, 96],
            },
        ])