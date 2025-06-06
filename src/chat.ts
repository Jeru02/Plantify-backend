import axios from "axios";
import  multer  from "multer";

import { QueryResult } from "pg";
import { Request, Response } from "express";
import FormData from "form-data";




formData.append('images', imageFile.buffer, {
      filename: imageFile.originalname,
      contentType: imageFile.mimetype,
    });
    formData.append('organs', 'leaf'); // You can make this dynamic or user-selected
    formData.append('include-related-images', 'false');
    formData.append('no-reject', 'true');
    formData.append('nb-results', '5');
    formData.append('lang', 'en');
    formData.append('type', 'kt');
    formData.append('api-key', '2b10iTe1G5xU8fnT08By99h');

const upload = multer({ storage: multer.memoryStorage() }); // use with router.post(...)
export const postImageToPlantNet = async (req: Request, res: Response): Promise<void> => {
  const imageFile = req.file;
  if (!imageFile) {
    res.status(400).json({ error: 'No image uploaded' });
    return;
  }
  try {
    const formData = new FormData();
    formData.append('images', imageFile.buffer, {
      filename: imageFile.originalname,
      contentType: imageFile.mimetype,
    });
    formData.append('organs', 'leaf'); // You can make this dynamic or user-selected
    formData.append('include-related-images', 'false');
    formData.append('no-reject', 'true');
    formData.append('nb-results', '5');
    formData.append('lang', 'en');
    formData.append('type', 'kt');
    formData.append('api-key', '2b10iTe1G5xU8fnT08By99h');
    const plantNetResponse = await axios.post(
      'https://my-api.plantnet.org/v2/identify/all',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );
    res.status(200).json({ plantData: plantNetResponse.data.results[0] });
  } catch (error: any) {
    console.error('PlantNet API error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to identify plant' });
  }
};