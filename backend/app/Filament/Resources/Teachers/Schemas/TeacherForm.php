<?php

namespace App\Filament\Resources\Teachers\Schemas;

use App\Models\Teacher;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\HtmlString;

class TeacherForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Teacher profile')
                ->description('The profile appears on both the English and Arabic public websites as soon as it is active.')
                ->schema([
                    Placeholder::make('current_photo')
                        ->label('Current public photo')
                        ->content(fn (?Teacher $record = null): HtmlString => new HtmlString($record
                            ? '<img src="'.e($record->public_image_url).'" alt="" style="width:112px;height:112px;object-fit:cover;border-radius:22px;border:4px solid #f7b718;box-shadow:0 12px 28px rgba(6,45,86,.18)">'
                            : '<span style="color:#64748b">Upload a portrait to create the profile.</span>')),
                    FileUpload::make('image_path')
                        ->label('Teacher portrait')
                        ->helperText('Portrait orientation works best. JPG, PNG, or WebP, up to 4 MB.')
                        ->disk('public')
                        ->directory('teachers')
                        ->image()
                        ->imageEditor()
                        ->imageEditorAspectRatios(['4:5', '1:1'])
                        ->maxSize(4096),
                    TextInput::make('slug')
                        ->helperText('Used in the profile URL, for example: teacher-name')
                        ->alphaDash()
                        ->unique(ignoreRecord: true)
                        ->required()
                        ->maxLength(120),
                    TextInput::make('sort_order')
                        ->label('Display order')
                        ->numeric()
                        ->minValue(0)
                        ->default(0)
                        ->required(),
                    Toggle::make('is_active')
                        ->label('Visible on the website')
                        ->helperText('Turn this off to hide the teacher without deleting the profile.')
                        ->default(true),
                ])
                ->columns(2),
            Section::make('English content')
                ->schema([
                    TextInput::make('name_en')->label('Name')->required()->maxLength(120),
                    TextInput::make('role_en')->label('Role / subject line')->required()->maxLength(180),
                    Textarea::make('short_bio_en')->label('Short card biography')->required()->rows(3)->maxLength(600)->columnSpanFull(),
                    Textarea::make('about_en')->label('About the teacher')->helperText('Separate paragraphs with a blank line.')->rows(7)->columnSpanFull(),
                    Textarea::make('approach_en')->label('Lesson approach')->rows(4)->columnSpanFull(),
                    TextInput::make('experience_en')->label('Experience line')->maxLength(220)->columnSpanFull(),
                    TagsInput::make('focus_en')->label('Teaching focus')->placeholder('Add focus area'),
                    TagsInput::make('qualifications_en')->label('Qualifications / standards')->placeholder('Add item'),
                    TagsInput::make('languages_en')->label('Languages')->placeholder('Add language'),
                    TagsInput::make('learners_en')->label('Best matched learners')->placeholder('Add learner type'),
                ])
                ->columns(2),
            Section::make('Arabic content')
                ->schema([
                    TextInput::make('name_ar')->label('الاسم')->required()->maxLength(120),
                    TextInput::make('role_ar')->label('الدور / التخصص')->required()->maxLength(180),
                    Textarea::make('short_bio_ar')->label('نبذة مختصرة')->required()->rows(3)->maxLength(600)->columnSpanFull(),
                    Textarea::make('about_ar')->label('عن المعلم')->helperText('افصل بين الفقرات بسطر فارغ.')->rows(7)->columnSpanFull(),
                    Textarea::make('approach_ar')->label('طريقة التدريس')->rows(4)->columnSpanFull(),
                    TextInput::make('experience_ar')->label('سطر الخبرة')->maxLength(220)->columnSpanFull(),
                    TagsInput::make('focus_ar')->label('مجالات التدريس')->placeholder('أضف مجالاً'),
                    TagsInput::make('qualifications_ar')->label('المؤهلات والمعايير')->placeholder('أضف عنصراً'),
                    TagsInput::make('languages_ar')->label('اللغات')->placeholder('أضف لغة'),
                    TagsInput::make('learners_ar')->label('الطلاب المناسبون')->placeholder('أضف نوع الطالب'),
                ])
                ->columns(2),
            Section::make('Programs')
                ->description('Choose which academy learning paths appear on this teacher profile.')
                ->schema([
                    TagsInput::make('course_slugs')
                        ->label('Course URL slugs')
                        ->suggestions(['quran-reading', 'tajweed-hifz', 'arabic-language', 'islamic-studies'])
                        ->placeholder('Add course slug')
                        ->columnSpanFull(),
                ]),
        ]);
    }
}
