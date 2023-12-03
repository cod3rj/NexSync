import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {LoginValidation, RegisterValidation} from "@/lib/validation";
import {z} from "zod";
import Loader from "@/app/layout/Loader.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useToast} from "@/components/ui/use-toast.ts";
import {useCreateUserAccount, useSignInAccount} from "@/app/react-query/queriesAndMutations.ts";
import {useUserContext} from "@/app/context/AuthContext.tsx";

const RegisterForm = () => {
    const {toast} = useToast();
    const {checkAuthUser, isLoading: isUserLoading} = useUserContext();
    const navigate = useNavigate();

    const { mutateAsync: createUserAccount, isPending: isCreatingUser} = useCreateUserAccount();
    const { mutateAsync: signInAccount, isPending: isSigningIn} = useSignInAccount();

    const form = useForm<z.infer<typeof RegisterValidation>>({
        resolver: zodResolver(RegisterValidation),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: z.infer<typeof RegisterValidation>) {
        const newUser = await createUserAccount(values);

        if(!newUser) {
            return toast({
                title: 'Sign up failed. Please try again.',
            })
        }

        const session = await signInAccount({
            email: values.email,
            password: values.password,
        })

        if(!session) {
            return toast({
                title: 'Sign in failed. Please try again.',
            })
        }

        const isLoggedIn = await checkAuthUser();

        if (isLoggedIn) {
            form.reset();
            navigate('/')
        } else {
            return toast({title: 'Sign in failed. Please try again.'})
        }
    }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <div className="flex items-center">
                    <img src="/assets/images/logo.svg" alt="logo"/>
                    <h1 className="h1-large-bold ml-2">NexSync</h1>
                </div>
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">To use your NexSync, please enter your details</p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {isCreatingUser ? (
                            <div className="flex-center gap-2">
                                <Loader/> Loading ...
                            </div>
                            ): "Sign Up"}
                    </Button>

                    <p className="text-small-regular text-light-2 text-center mt-2">
                        Already have an account?
                        <Link to="/login" className="text-primary-500 text-small-semibold ml-1">Log In</Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default RegisterForm