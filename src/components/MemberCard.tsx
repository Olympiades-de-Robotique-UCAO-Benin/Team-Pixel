import { Mail } from "lucide-react";

export interface Member {
  name: string;
  imageUrl: string;
  level: string;
  mail: string;
}

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="card bg-base-100 shadow-md border border-base-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="card-body items-center text-center">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="card-title mt-4">{member.name}</h2>

        {/* Level */}
        <span className="badge badge-primary badge-outline">
          {member.level}
        </span>

        {/* Email */}
        <a
          href={`mailto:${member.mail}`}
          className="flex items-center gap-2 text-sm text-base-content/70 hover:text-primary mt-3 transition-colors"
        >
          <Mail size={16} />
          {member.mail}
        </a>
      </div>
    </div>
  );
}
