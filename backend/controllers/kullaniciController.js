import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import Kullanici from "../models/kullaniciModel.js";

import  jwt from "jsonwebtoken";

const tokenOlustur = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export  const RegisterKullanici = asyncHandler(async (req, res) => {
  const { kullaniciAd, email, parola } = req.body;

  if (!kullaniciAd || !email || !parola) {
    res.status(400);

    throw new Error("Lütfen alanları doldurunuz");
  }

  const kullanici = await Kullanici.findOne({ email });

  if (kullanici) {
    res.status(400);

    throw new Error("Bu email zaten var");
  }
  const salt = await bcrypt.genSalt(10);
  const sifrelenmisParola = await bcrypt.hash(parola, salt);

  const yeniKullanici = await Kullanici.create({
    kullaniciAd,
    email,
    parola: sifrelenmisParola,
  });

  if (yeniKullanici) {
    res.status(201).json({
      _id: yeniKullanici.id,
      kullaniciAd: yeniKullanici.kullaniciAd,
      email: yeniKullanici.email,
      token: tokenOlustur(yeniKullanici._id),
    });
  } else {
    res.status(400);
    throw new Error("Geçersiz kullanıcı verisi");
  }
});

export const Loginkullanici = asyncHandler(async (req, res) => {
  const { email, parola } = req.body;
  const kullanici = await Kullanici.findOne({ email });
  if (kullanici && (await bcrypt.compare(parola, kullanici.parola))) {
    res.json({
      _id: kullanici.id,
      kullaniciAd: kullanici.kullaniciAd,
      email: kullanici.email,
      token: tokenOlustur(kullanici._id),
    });
  } else {
    res.status(400);
    throw new Error("geçersiz email ya da parola");
  }
});
export const Getkullanici = (req, res) => {
  res.json({ mesaj: "kullancı get ıslemleri" });
};

