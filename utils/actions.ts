'use server'
import { revalidatePath } from 'next/cache';
import z from 'zod'
import { prisma } from './db';
import { redirect } from 'next/navigation';

export type State = {
    message?: string | null,
    errors ?: {
        nomEntreprise?: string[];
        typeEntreprise?: string[];
        budget?: string[];
        owner?: string[];
        phone?: string[];
    }
}
const contratSchema = z.object({
    nomEntreprise: z.string({
        invalid_type_error: 'Veuillez sélectionner un client.',
        required_error: 'Le nom de l\'entreprise est requis.'
    }).min(3, {
        message: 'Le nom de l\'entreprise doit contenir au moins 3 caractères.'
    }),
    
    typeEntreprise: z.enum(['petite', 'grande', 'moyenne'], {
        invalid_type_error: 'Le type d\'entreprise doit être "petite", "moyenne" ou "grande".',
        required_error: 'Le type d\'entreprise est requis.'
    }),
    
    budget: z.coerce.number({
        invalid_type_error: 'Le budget doit être un nombre.'
    }).gt(0, {
        message: 'Le budget doit être supérieur à 0.'
    }),
    
    owner: z.string({
        invalid_type_error: 'Veuillez sélectionner un client.',
        required_error: 'Le propriétaire est requis.'
    }).min(3, {
        message: 'Le nom du propriétaire doit contenir au moins 3 caractères.'
    }),
    
    phone: z.string({
        invalid_type_error: 'Le téléphone doit être une chaîne de caractères.',
        required_error: 'Le numéro de téléphone est requis.'
    }).min(3, {
        message: 'Le numéro de téléphone doit contenir au moins 3 caractères.'
    })
});
export const createContrat = async (prevState : State | undefined, formData : FormData) => {
        try {

            const validation = contratSchema.safeParse({
                nomEntreprise   : formData.get('nomEntreprise'),
                typeEntreprise  : formData.get('typeEntreprise'),
                budget          : formData.get('budget'),
                owner           : formData.get('owner'),
                phone           : formData.get('phone'),
            })
            if(!validation.success){
                console.log("uwu");
                
                    return {
                        errors: validation.error.flatten().fieldErrors,
                        message: 'Missing Fields. Failed to Create Invoice.',
                      };
            }
            const { nomEntreprise, typeEntreprise, budget, owner , phone} = validation.data;
            const contrat = await prisma.contrat.create({
                data : {
                    nomEntreprise,
                    typeEntreprise,
                    budget,
                    propriétaire: owner,
                    téléphone : phone 
                }
            })
            revalidatePath("/contrats");
            redirect("/contrats")
        } catch (error) {
            console.log(error);
            
            return {
                message: 'Database Error: Failed to Create contrat.',
              };        
        }
}