import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        const { password, ...info } = data[0];
        return res.json(info);
    });
};

export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        // Build query parts dynamically to optionally update password
        const fields = ["name = ?", "city = ?", "website = ?", "profilePic = ?", "coverPic = ?"];
        const values = [req.body.name, req.body.city, req.body.website, req.body.profilePic, req.body.coverPic];

        // If password is provided and non-empty, hash it and include in update
        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            fields.push("password = ?");
            values.push(hashedPassword);
        }

        const q = `UPDATE users SET ${fields.join(",")} WHERE id = ?`;
        values.push(userInfo.id);

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.affectedRows > 0) return res.json("Updated!");
            return res.status(403).json("You can update only your account!");
        });
    });
};