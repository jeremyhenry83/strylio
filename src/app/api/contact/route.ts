import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

// Initialiser le client Notion
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Créer une nouvelle page dans la base de données Notion
    await notion.pages.create({
      parent: {
        database_id: DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        "Date de réception": {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Message enregistré avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du message:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'enregistrement du message" },
      { status: 500 }
    );
  }
} 