export type LeadEmailResponse = {
    data: {
        code: string
        email: string
        quiz_answers: {
            current_weight: number
            your_goals: string
            how_often_do_you_eat_veggies: string
            how_often_do_you_eat_fermented_foods: string
            have_you_gained_weight_in_the_last_year: string
            diets_tried: string
            do_you_experience_any_of_the_following_symptoms: string
            do_you_struggle_with_any_of_the_following_issues: string
            do_you_sometimes_tend_to: string
            age: string
            height_cm: number
            height_ft: string
            weight_kg: number
            weight_lb: number
            weight_goal: number
            is_answers_in_kg: boolean
            gender: string
            order_id: number
            order_amount: string
        }
        client: null
        external_data: {
            lead_id: number
            key: string
            value: string
        }[]
        privacy_policy_agreement: boolean
        sms_marketing_agreement: boolean
        email_marketing_agreement: boolean
    }
}