export const booksData = [
    { key: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', status: 'Available' },
    { key: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', status: 'Borrowed' },
    { key: '3', title: '1984', author: 'George Orwell', genre: 'Dystopian', status: 'Available' },
    { key: '4', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', status: 'Maintenance' },
];

export const membersData = [
    { key: '1', name: 'Alice Johnson', memberId: 'M001', plan: 'Gold', joinDate: '2023-01-15', status: 'Active' },
    { key: '2', name: 'Bob Smith', memberId: 'M002', plan: 'Silver', joinDate: '2023-02-20', status: 'Active' },
    { key: '3', name: 'Charlie Brown', memberId: 'M003', plan: 'Bronze', joinDate: '2022-11-10', status: 'Expired' },
    { key: '4', name: 'Diana Prince', memberId: 'M004', plan: 'Gold', joinDate: '2023-05-01', status: 'Active' },
];

export const circulationData = [
    { key: '1', bookTitle: 'The Great Gatsby', memberName: 'Bob Smith', borrowDate: '2024-07-10', returnDate: '2024-08-10', status: 'Borrowed' },
    { key: '2', bookTitle: 'To Kill a Mockingbird', memberName: 'Alice Johnson', borrowDate: '2024-07-15', returnDate: '2024-08-15', status: 'Borrowed' },
    { key: '3', bookTitle: 'The Hobbit', memberName: 'Charlie Brown', borrowDate: '2024-06-05', returnDate: '2024-07-05', status: 'Returned' },
];

export const genresData = [{ key: '1', name: 'Classic' }, { key: '2', name: 'Dystopian' }, { key: '3', name: 'Romance' }, { key: '4', name: 'Science Fiction' }];
export const authorsData = [{ key: '1', name: 'F. Scott Fitzgerald' }, { key: '2', name: 'Harper Lee' }, { key: '3', name: 'George Orwell' }, { key: '4', name: 'Jane Austen' }];
export const publishersData = [{ key: '1', name: 'Penguin Books' }, { key: '2', name: 'HarperCollins' }, { key: '3', name: 'Simon & Schuster' }];
export const languagesData = [{ key: '1', name: 'English' }, { key: '2', name: 'Spanish' }, { key: '3', name: 'French' }];
export const tagsData = [{ key: '1', name: 'Bestseller' }, { key: '2', name: 'New Arrival' }, { key: '3', name: 'Award Winner' }];
export const usersData = [{ key: '1', name: 'Admin User', email: 'admin@example.com', role: 'Administrator' }, { key: '2', name: 'Librarian User', email: 'librarian@example.com', role: 'Librarian' }];
export const rolesData = [{ key: '1', name: 'Administrator', permissions: ['Manage Users', 'Manage Books', 'Settings'] }, { key: '2', name: 'Librarian', permissions: ['Manage Books', 'Circulation'] }];
export const plansData = [{ key: '1', name: 'Gold', fee: '$50/year', maxBooks: 10 }, { key: '2', name: 'Silver', fee: '$30/year', maxBooks: 5 }, { key: '3', name: 'Bronze', fee: '$15/year', maxBooks: 2 }];
export const subscriptionsData = [{ key: '1', memberName: 'Alice Johnson', plan: 'Gold', startDate: '2024-01-15', endDate: '2025-01-15', status: 'Active' }];
export const seriesData = [{ key: '1', name: 'The Lord of the Rings' }, { key: '2', name: 'Harry Potter' }];
export const requestsData = [{ key: '1', bookTitle: 'Dune', memberName: 'Bob Smith', requestDate: '2024-07-20', status: 'Pending' }];
export const penaltiesData = [{ key: '1', memberName: 'Charlie Brown', bookTitle: 'The Hobbit', amount: '$2.50', reason: 'Late Return', status: 'Paid' }];
