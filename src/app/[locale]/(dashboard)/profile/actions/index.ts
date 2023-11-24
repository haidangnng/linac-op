"use server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

// export async function createTodo(title: string) {
//   const supabase = await createSupabaseServerClient();
//   const result = await supabase.from("todo").insert({ title }).single();
//   revalidatePath("/todo");
//   return JSON.stringify(result);
// }

export async function getProfile() {
  const supabase = await createSupabaseServerClient();
  const { data: currentUser, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error("error");
  }

  const { data: userData } = await supabase
    .from("profile")
    .select("*")
    .eq("auth_id", currentUser.user.id)
    .single();

  return userData;
}

// export async function deleteTodoById(id: string) {
//   const supabase = await createSupabaseServerClient();
//   await supabase.from("todo").delete().eq("id", id);
//   revalidatePath("/todo");
// }
//
// export async function updateTodoById(id: string, completed: boolean) {
//   const supabase = await createSupabaseServerClient();
//   await supabase.from("todo").update({ completed }).eq("id", id);
//   revalidatePath("/todo");
// }
