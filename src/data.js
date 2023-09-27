import { useState } from 'react';

export const useUsers = () => {
    const [users, setUsers] = useState({
        "132fs": {
            uuid:"132fs",
            expenses: new Set(),
            firstName: "bella",
            lastName: "daqiq",
            totalExpense: 0,
        },
        "133ff": {
            uuid:"133ff",
            expenses: new Set(),
            firstName: "ae",
            lastName: "boo",
            totalExpense: 0,
        },
    });

    return { users, setUsers };
};

export const useExpenses = () => {
    const [expenses, setExpenses] = useState({
        "123fsf": {
            uuid:"123fsf",
            category: "food",
            cost: 0,
            userId: "132fs",
            description: "for happy events",
        },
    });

    return { expenses, setExpenses };
};


export const useCategories = () => {
    const [categories, setCategories] = useState({
        Food: 0,
        Activity: 0,
        OfficeEquipment: 0,
    });

    return { categories, setCategories };
};
