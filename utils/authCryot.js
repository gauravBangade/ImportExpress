import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword; // Corrected from hashPassword to hashedPassword
    } catch (error) {
        console.log(error);
    }
};


export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log("Error comparing passwords:", error);
        return false;
    }
}
