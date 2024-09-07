const dataStudent = [
    {
        key: '1',
        name: 'John Brown',
        id: '#00001',
        date: 'March 24, 2004',
        parent: 'Alex Brown',
        city: 'Jakarta',
        grade: 'VII A',
        marks: { key: '1', chinese: 98, math: 60, english: 70, science: 99, history: 80, geography: 85 }
    },
    {
        key: '2',
        name: 'Jim Green',
        id: '#00002',
        date: 'April 15, 2005',
        parent: 'Emily Green',
        city: 'London',
        grade: 'VII B',
        marks: { key: '2', chinese: 88, math: 76, english: 66, science: 79, history: 78, geography: 82 }
    },
    {
        key: '3',
        name: 'Joe Black',
        id: '#00003',
        date: 'May 10, 2003',
        parent: 'Sarah Black',
        city: 'New York',
        grade: 'VII C',
        marks: { key: '3', chinese: 92, math: 65, english: 72, science: 88, history: 90, geography: 87 }
    },
    {
        key: '4',
        name: 'Jessica White',
        id: '#00004',
        date: 'June 8, 2006',
        parent: 'David White',
        city: 'Paris',
        grade: 'VII B',
        marks: { chinese: 85, math: 71, english: 75, science: 80, history: 89, geography: 76 }
    },
    {
        key: '5',
        name: 'Michael Blue',
        id: '#00005',
        date: 'July 12, 2007',
        parent: 'Olivia Blue',
        city: 'Berlin',
        grade: 'VII B',
        marks: { chinese: 79, math: 82, english: 69, science: 90, history: 86, geography: 73 }
    },
    {
        key: '6',
        name: 'Emma Green',
        id: '#00006',
        date: 'August 20, 2002',
        parent: 'Liam Green',
        city: 'Tokyo',
        grade: 'VII A',
        marks: { chinese: 90, math: 67, english: 80, science: 95, history: 75, geography: 89 }
    },
    {
        key: '7',
        name: 'Lucas Brown',
        id: '#00007',
        date: 'September 5, 2001',
        parent: 'Sophia Brown',
        city: 'Sydney',
        grade: 'VII A',
        marks: { chinese: 89, math: 73, english: 83, science: 92, history: 78, geography: 84 }
    },
    {
        key: '8',
        name: 'Sophia Black',
        id: '#00008',
        date: 'October 3, 2004',
        parent: 'James Black',
        city: 'Toronto',
        grade: 'VII C',
        marks: { chinese: 95, math: 78, english: 77, science: 89, history: 84, geography: 90 }
    },
    {
        key: '9',
        name: 'Liam White',
        id: '#00009',
        date: 'November 14, 2005',
        parent: 'Mia White',
        city: 'Moscow',
        grade: 'VII B',
        marks: { chinese: 80, math: 74, english: 81, science: 88, history: 82, geography: 78 }
    },
    {
        key: '10',
        name: 'Olivia Blue',
        id: '#00010',
        date: 'December 25, 2003',
        parent: 'Ethan Blue',
        city: 'Dubai',
        grade: 'VII A',
        marks: { chinese: 92, math: 81, english: 85, science: 94, history: 89, geography: 93 }
    },
    {
        key: '11',
        name: 'Noah Green',
        id: '#00011',
        date: 'January 18, 2006',
        parent: 'Ava Green',
        city: 'Los Angeles',
        grade: 'VII A',
        marks: { chinese: 88, math: 74, english: 83, science: 91, history: 87, geography: 90 }
    },
    {
        key: '12',
        name: 'Mia Brown',
        id: '#00012',
        date: 'February 22, 2002',
        parent: 'William Brown',
        city: 'Singapore',
        grade: 'VII A',
        marks: { chinese: 90, math: 69, english: 76, science: 85, history: 80, geography: 86 }
    },
    {
        key: '13',
        name: 'Ethan Black',
        id: '#00013',
        date: 'March 12, 2004',
        parent: 'Charlotte Black',
        city: 'Bangkok',
        grade: 'VII A',
        marks: { chinese: 85, math: 77, english: 80, science: 90, history: 83, geography: 88 }
    },
    {
        key: '14',
        name: 'Ava Smith',
        id: '#00014',
        date: 'April 10, 2005',
        parent: 'Sophia Smith',
        city: 'Hanoi',
        grade: 'VII B',
        marks: { chinese: 82, math: 68, english: 71, science: 75, history: 79, geography: 77 }
    },
    {
        key: '15',
        name: 'James Taylor',
        id: '#00015',
        date: 'May 22, 2004',
        parent: 'Jack Taylor',
        city: 'Rome',
        grade: 'VII C',
        marks: { chinese: 91, math: 70, english: 77, science: 84, history: 80, geography: 83 }
    },
    {
        key: '16',
        name: 'Sophia Johnson',
        id: '#00016',
        date: 'June 16, 2003',
        parent: 'Elizabeth Johnson',
        city: 'Hong Kong',
        grade: 'VII B',
        marks: { chinese: 87, math: 74, english: 80, science: 88, history: 83, geography: 79 }
    },
    {
        key: '17',
        name: 'William Davis',
        id: '#00017',
        date: 'July 2, 2006',
        parent: 'Benjamin Davis',
        city: 'Osaka',
        grade: 'VII B',
        marks: { chinese: 78, math: 68, english: 77, science: 85, history: 80, geography: 74 }
    },
    {
        key: '18',
        name: 'Isabella Martinez',
        id: '#00018',
        date: 'August 25, 2003',
        parent: 'Lucas Martinez',
        city: 'Madrid',
        grade: 'VII C',
        marks: { chinese: 90, math: 77, english: 82, science: 88, history: 84, geography: 80 }
    },
    {
        key: '19',
        name: 'Mason Moore',
        id: '#00019',
        date: 'September 10, 2007',
        parent: 'Henry Moore',
        city: 'Seoul',
        grade: 'VII A',
        marks: { chinese: 91, math: 82, english: 84, science: 95, history: 89, geography: 92 }
    },
    {
        key: '20',
        name: 'Emily Miller',
        id: '#00020',
        date: 'October 30, 2002',
        parent: 'Grace Miller',
        city: 'Bangkok',
        grade: 'VII A',
        marks: { chinese: 93, math: 75, english: 78, science: 90, history: 85, geography: 88 }
    },
    {
        key: '21',
        name: 'Harper Rodriguez',
        id: '#00021',
        date: 'November 11, 2004',
        parent: 'David Rodriguez',
        city: 'Manila',
        grade: 'VII C',
        marks: { chinese: 80, math: 67, english: 74, science: 85, history: 79, geography: 81 }
    },
    {
        key: '22',
        name: 'Ella Anderson',
        id: '#00022',
        date: 'December 18, 2006',
        parent: 'Nathan Anderson',
        city: 'Kuala Lumpur',
        grade: 'VII C',
        marks: { chinese: 85, math: 73, english: 76, science: 82, history: 77, geography: 83 }
    },
    {
        key: '23',
        name: 'Logan Thomas',
        id: '#00023',
        date: 'January 5, 2004',
        parent: 'Olivia Thomas',
        city: 'Vienna',
        grade: 'VII B',
        marks: { chinese: 92, math: 78, english: 79, science: 87, history: 82, geography: 84 }
    },
    {
        key: '24',
        name: 'Lily Wilson',
        id: '#00024',
        date: 'February 27, 2005',
        parent: 'Ella Wilson',
        city: 'Brussels',
        grade: 'VII B',
        marks: { chinese: 88, math: 74, english: 77, science: 83, history: 81, geography: 79 }
    },
    {
        key: '25',
        name: 'Daniel Lee',
        id: '#00025',
        date: 'March 8, 2003',
        parent: 'James Lee',
        city: 'Dubai',
        grade: 'VII A',
        marks: { chinese: 84, math: 70, english: 75, science: 88, history: 80, geography: 82 }
    },
    {
        key: '26',
        name: 'Avery Clark',
        id: '#00026',
        date: 'April 16, 2006',
        parent: 'Mia Clark',
        city: 'Zurich',
        grade: 'VII C',
        marks: { chinese: 87, math: 72, english: 78, science: 83, history: 85, geography: 88 }
    },
    {
        key: '27',
        name: 'Oliver Hall',
        id: '#00027',
        date: 'May 30, 2002',
        parent: 'William Hall',
        city: 'Vienna',
        grade: 'VII A',
        marks: { chinese: 91, math: 80, english: 85, science: 92, history: 78, geography: 89 }
    },
    {
        key: '28',
        name: 'Charlotte Scott',
        id: '#00028',
        date: 'June 24, 2005',
        parent: 'James Scott',
        city: 'Amsterdam',
        grade: 'VII A',
        marks: { chinese: 86, math: 77, english: 79, science: 85, history: 82, geography: 90 }
    },
    {
        key: '29',
        name: 'Henry Young',
        id: '#00029',
        date: 'July 19, 2004',
        parent: 'Sophia Young',
        city: 'Osaka',
        grade: 'VII C',
        marks: { chinese: 88, math: 73, english: 75, science: 80, history: 84, geography: 81 }
    },
    {
        key: '30',
        name: 'Mia Lee',
        id: '#00030',
        date: 'August 3, 2007',
        parent: 'Daniel Lee',
        city: 'Hong Kong',
        grade: 'VII B',
        marks: { chinese: 90, math: 78, english: 81, science: 85, history: 82, geography: 84 }
    },
    {
        key: '31',
        name: 'Elijah Harris',
        id: '#00031',
        date: 'September 20, 2006',
        parent: 'Liam Harris',
        city: 'Stockholm',
        grade: 'VII B',
        marks: { chinese: 83, math: 74, english: 76, science: 80, history: 77, geography: 82 }
    },
    {
        key: '32',
        name: 'Harper Walker',
        id: '#00032',
        date: 'October 7, 2003',
        parent: 'Olivia Walker',
        city: 'Lisbon',
        grade: 'VII C',
        marks: { chinese: 85, math: 77, english: 80, science: 86, history: 78, geography: 84 }
    },
    {
        key: '33',
        name: 'Lucas Allen',
        id: '#00033',
        date: 'November 15, 2004',
        parent: 'Ava Allen',
        city: 'Cape Town',
        grade: 'VII B',
        marks: { chinese: 89, math: 80, english: 82, science: 84, history: 79, geography: 86 }
    },
    {
        key: '34',
        name: 'Mia Collins',
        id: '#00034',
        date: 'December 12, 2005',
        parent: 'Mia Collins',
        city: 'Singapore',
        grade: 'VII A',
        marks: { chinese: 88, math: 73, english: 77, science: 85, history: 80, geography: 82 }
    },
    {
        key: '35',
        name: 'Benjamin Miller',
        id: '#00035',
        date: 'January 22, 2003',
        parent: 'James Miller',
        city: 'New Delhi',
        grade: 'VII A',
        marks: { chinese: 94, math: 79, english: 82, science: 88, history: 85, geography: 87 }
    },
    {
        key: '36',
        name: 'Evelyn Martinez',
        id: '#00036',
        date: 'February 10, 2006',
        parent: 'David Martinez',
        city: 'Athens',
        grade: 'VII C',
        marks: { chinese: 90, math: 75, english: 78, science: 84, history: 82, geography: 88 }
    },
    {
        key: '37',
        name: 'Daniel Walker',
        id: '#00037',
        date: 'March 15, 2005',
        parent: 'Emily Walker',
        city: 'Paris',
        grade: 'VII B',
        marks: { chinese: 87, math: 78, english: 81, science: 79, history: 77, geography: 80 }
    },
    {
        key: '38',
        name: 'Zoe Wilson',
        id: '#00038',
        date: 'April 8, 2004',
        parent: 'Jacob Wilson',
        city: 'Rome',
        grade: 'VII C',
        marks: { chinese: 86, math: 80, english: 83, science: 88, history: 82, geography: 86 }
    },
    {
        key: '39',
        name: 'Samuel Young',
        id: '#00039',
        date: 'May 19, 2007',
        parent: 'Samantha Young',
        city: 'Madrid',
        grade: 'VII A',
        marks: { chinese: 91, math: 82, english: 85, science: 90, history: 77, geography: 89 }
    },
    {
        key: '40',
        name: 'Avery Johnson',
        id: '#00040',
        date: 'June 30, 2002',
        parent: 'Michael Johnson',
        city: 'Vienna',
        grade: 'VII B',
        marks: { chinese: 89, math: 74, english: 78, science: 85, history: 80, geography: 83 }
    },
    {
        key: '41',
        name: 'Madison Brown',
        id: '#00041',
        date: 'July 8, 2003',
        parent: 'Christopher Brown',
        city: 'Moscow',
        grade: 'VII C',
        marks: { chinese: 85, math: 77, english: 80, science: 82, history: 78, geography: 81 }
    },
    {
        key: '42',
        name: 'Alexander Taylor',
        id: '#00042',
        date: 'August 20, 2005',
        parent: 'Laura Taylor',
        city: 'Hanoi',
        grade: 'VII C',
        marks: { chinese: 90, math: 72, english: 77, science: 88, history: 82, geography: 80 }
    },
    {
        key: '43',
        name: 'Natalie Scott',
        id: '#00043',
        date: 'September 7, 2006',
        parent: 'Ella Scott',
        city: 'Hong Kong',
        grade: 'VII A',
        marks: { chinese: 94, math: 75, english: 82, science: 87, history: 80, geography: 90 }
    },
    {
        key: '44',
        name: 'Ryan Lee',
        id: '#00044',
        date: 'October 18, 2004',
        parent: 'Robert Lee',
        city: 'Sydney',
        grade: 'VII B',
        marks: { chinese: 88, math: 73, english: 79, science: 82, history: 85, geography: 78 }
    },
    {
        key: '45',
        name: 'Leo Carter',
        id: '#00045',
        date: 'November 10, 2007',
        parent: 'Elizabeth Carter',
        city: 'New Delhi',
        grade: 'VII C',
        marks: { chinese: 85, math: 77, english: 74, science: 83, history: 78, geography: 80 }
    }
];

export default dataStudent