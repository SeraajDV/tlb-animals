import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { getAnimals } from "../api/animals";
import { useAnimalsStore } from "../store/useAnimalsStore";

export default function SearchForm() {
  const { setAnimals } = useAnimalsStore();
  const saveAnimals = useMutation({
    mutationKey: ["animals"],
    mutationFn: (name: string) => getAnimals(name),
    onSuccess: (data) => {
      setAnimals(data);
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
    },
    onSubmit: async ({ value }) => {
      saveAnimals.mutate(value.name);
      value.name = "";
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="flex items-center justify-center gap-2"
    >
      <div>
        <form.Field
          name="name"
          children={(field) => (
            <input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="rounded-md border-2 border-gray-300 bg-transparent px-2 py-1"
            />
          )}
        />
      </div>
      <button
        className="rounded bg-gray-500 px-2 py-1 text-white hover:bg-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
