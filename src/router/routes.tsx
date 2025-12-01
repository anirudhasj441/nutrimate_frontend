import MainLayout from "../layout/main_layout";
import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protected_route";

const IndexPage = React.lazy(() => import("../pages/index_page"));
const MealPlanPage = React.lazy(() => import("../pages/meal_plan"));
const HealthyRecipesPage = React.lazy(() => import("../pages/healthy_recipes_page"));
const TrackProgressPage = React.lazy(() => import("../pages/track_progress_page"));
const DietPlanPage = React.lazy(() => import("../pages/diet_plan_page"));
const UserRegistrationPage = React.lazy(() => import("../pages/user_registration_page"));
const LoginPage = React.lazy( () => import("../pages/login_page"))
const RecipePage = React.lazy(() => import("../pages/recipe_page"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <IndexPage />
                    </Suspense>
                )
            },
            {
                path: "meal-plan",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <MealPlanPage />
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: "healthy-recipes",
                element: <ProtectedRoute/>,
                children: [
                    {   
                        path: "",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <HealthyRecipesPage />
                            </Suspense>
                        )

                    }
                ]
            },
            {
                path: "recipe/:id",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <RecipePage />
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: "track-progress",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <TrackProgressPage />
                            </Suspense>
                        )

                    }
                ]
            },
            {
                path: "diet-plan",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <DietPlanPage />
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: "user-registration",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <UserRegistrationPage />
                    </Suspense>
                )
            },
            {
                path: "login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginPage />
                    </Suspense>
                )
            }
        ]
    }

]

export default routes;